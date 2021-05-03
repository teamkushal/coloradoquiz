import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent781Component } from './test-component781.component';

describe('TestComponent781Component', () => {
  let component: TestComponent781Component;
  let fixture: ComponentFixture<TestComponent781Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent781Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
