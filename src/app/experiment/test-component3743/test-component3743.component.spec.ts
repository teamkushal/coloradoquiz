import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3743Component } from './test-component3743.component';

describe('TestComponent3743Component', () => {
  let component: TestComponent3743Component;
  let fixture: ComponentFixture<TestComponent3743Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3743Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
