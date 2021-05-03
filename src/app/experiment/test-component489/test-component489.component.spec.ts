import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent489Component } from './test-component489.component';

describe('TestComponent489Component', () => {
  let component: TestComponent489Component;
  let fixture: ComponentFixture<TestComponent489Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent489Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
