import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent482Component } from './test-component482.component';

describe('TestComponent482Component', () => {
  let component: TestComponent482Component;
  let fixture: ComponentFixture<TestComponent482Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent482Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
