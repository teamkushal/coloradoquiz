import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3452Component } from './test-component3452.component';

describe('TestComponent3452Component', () => {
  let component: TestComponent3452Component;
  let fixture: ComponentFixture<TestComponent3452Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3452Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
