import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3569Component } from './test-component3569.component';

describe('TestComponent3569Component', () => {
  let component: TestComponent3569Component;
  let fixture: ComponentFixture<TestComponent3569Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3569Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
