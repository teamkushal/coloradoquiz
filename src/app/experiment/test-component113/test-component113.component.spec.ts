import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent113Component } from './test-component113.component';

describe('TestComponent113Component', () => {
  let component: TestComponent113Component;
  let fixture: ComponentFixture<TestComponent113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
