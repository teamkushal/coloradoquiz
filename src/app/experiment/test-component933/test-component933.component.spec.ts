import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent933Component } from './test-component933.component';

describe('TestComponent933Component', () => {
  let component: TestComponent933Component;
  let fixture: ComponentFixture<TestComponent933Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent933Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
