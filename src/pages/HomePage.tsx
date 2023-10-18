import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const HomePage = () => {
	return (
		<div>
			<Container>
				<Main>
					<Card>
						<Right>
							<Text>
								Lorem, ipsum dolor sit amet consectetur adipisicing
								elit. Quibusdam nisi enim quia distinctio laboriosam,
								cupiditate fuga alias sit suscipit! Fugit, sapiente
								ea! Doloremque debitis quibusdam necessitatibus at
								fugiat dolor est!
							</Text>

							<Both>
								<View>View Urgency</View>
								<Time>Time</Time>
							</Both>
						</Right>
						<Left>
							<Div>
								<Close>
									<AiOutlineClose />
								</Close>
							</Div>
							<Edit>Edit</Edit>
						</Left>
					</Card>
				</Main>
			</Container>
		</div>
	);
};

export default HomePage;

const Div = styled.div``;

const Edit = styled.div`
	background-color: black;
	color: white;
	padding: 5px 18px;
	font-size: 15px;
	border-radius: 30px;
`;

const Close = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;

	&:hover {
		${Div} {
			transform: rotate(90);
		}
		cursor: pointer;
	}
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
	flex: 1;
`;
const Time = styled.div``;
const View = styled.div``;

const Both = styled.div`
	display: flex;
	font-size: 12px;
	width: 100%;
	justify-content: space-between;
`;

const Text = styled.div`
	font-size: 12px;
	flex: 1;
`;
const Right = styled.div`
	width: 250px;
	display: flex;
	flex-direction: column;
	height: 100%;
`;
const Card = styled.div`
	width: 300px;
	min-height: 200px;
	border-radius: 5px;
	border: 1px solid silver;
	padding: 5px;
	flex: 1;
	display: flex;
`;

const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Container = styled.div`
	width: 100%;
	min-height: 70vh;

	display: flex;
	justify-content: center;
`;
