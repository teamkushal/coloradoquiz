import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2464Component } from './test-component2464.component';

describe('TestComponent2464Component', () => {
  let component: TestComponent2464Component;
  let fixture: ComponentFixture<TestComponent2464Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2464Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
