import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent969Component } from './test-component969.component';

describe('TestComponent969Component', () => {
  let component: TestComponent969Component;
  let fixture: ComponentFixture<TestComponent969Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent969Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
