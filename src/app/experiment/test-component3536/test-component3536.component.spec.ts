import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3536Component } from './test-component3536.component';

describe('TestComponent3536Component', () => {
  let component: TestComponent3536Component;
  let fixture: ComponentFixture<TestComponent3536Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3536Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
