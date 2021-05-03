import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent246Component } from './test-component246.component';

describe('TestComponent246Component', () => {
  let component: TestComponent246Component;
  let fixture: ComponentFixture<TestComponent246Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent246Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
