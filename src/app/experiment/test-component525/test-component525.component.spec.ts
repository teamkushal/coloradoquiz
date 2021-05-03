import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent525Component } from './test-component525.component';

describe('TestComponent525Component', () => {
  let component: TestComponent525Component;
  let fixture: ComponentFixture<TestComponent525Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent525Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
