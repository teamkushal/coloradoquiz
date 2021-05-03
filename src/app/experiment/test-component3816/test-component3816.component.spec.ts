import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3816Component } from './test-component3816.component';

describe('TestComponent3816Component', () => {
  let component: TestComponent3816Component;
  let fixture: ComponentFixture<TestComponent3816Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3816Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
