import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2983Component } from './test-component2983.component';

describe('TestComponent2983Component', () => {
  let component: TestComponent2983Component;
  let fixture: ComponentFixture<TestComponent2983Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2983Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
