import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent193Component } from './test-component193.component';

describe('TestComponent193Component', () => {
  let component: TestComponent193Component;
  let fixture: ComponentFixture<TestComponent193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent193Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
