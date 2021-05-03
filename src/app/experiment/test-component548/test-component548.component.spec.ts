import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent548Component } from './test-component548.component';

describe('TestComponent548Component', () => {
  let component: TestComponent548Component;
  let fixture: ComponentFixture<TestComponent548Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent548Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
