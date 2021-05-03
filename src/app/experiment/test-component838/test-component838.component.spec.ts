import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent838Component } from './test-component838.component';

describe('TestComponent838Component', () => {
  let component: TestComponent838Component;
  let fixture: ComponentFixture<TestComponent838Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent838Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
