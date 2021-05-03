import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3864Component } from './test-component3864.component';

describe('TestComponent3864Component', () => {
  let component: TestComponent3864Component;
  let fixture: ComponentFixture<TestComponent3864Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3864Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
