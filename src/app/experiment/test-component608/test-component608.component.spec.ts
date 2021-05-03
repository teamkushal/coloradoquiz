import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent608Component } from './test-component608.component';

describe('TestComponent608Component', () => {
  let component: TestComponent608Component;
  let fixture: ComponentFixture<TestComponent608Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent608Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
