import React from "react";
import styled from "styled";

const Header = () => {
	return (
		<div>
			<Container>
				<Main>
					<Link>
						<Logo />
					</Link>

					<Button>Add Task</Button>
				</Main>
			</Container>
		</div>
	);
};

export default Header;

const Link = styled.div``;
const Button = styled.div``;
const Logo = styled.div``;
const Main = styled.div``;
const Container = styled.div``;
