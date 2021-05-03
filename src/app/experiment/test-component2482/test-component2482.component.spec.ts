import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2482Component } from './test-component2482.component';

describe('TestComponent2482Component', () => {
  let component: TestComponent2482Component;
  let fixture: ComponentFixture<TestComponent2482Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2482Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
