import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent791Component } from './test-component791.component';

describe('TestComponent791Component', () => {
  let component: TestComponent791Component;
  let fixture: ComponentFixture<TestComponent791Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent791Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
