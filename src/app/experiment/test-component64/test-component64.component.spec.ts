import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent64Component } from './test-component64.component';

describe('TestComponent64Component', () => {
  let component: TestComponent64Component;
  let fixture: ComponentFixture<TestComponent64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
