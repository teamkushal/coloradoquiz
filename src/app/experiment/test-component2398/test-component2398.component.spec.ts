import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2398Component } from './test-component2398.component';

describe('TestComponent2398Component', () => {
  let component: TestComponent2398Component;
  let fixture: ComponentFixture<TestComponent2398Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2398Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
