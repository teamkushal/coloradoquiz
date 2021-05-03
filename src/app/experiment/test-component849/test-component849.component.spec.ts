import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent849Component } from './test-component849.component';

describe('TestComponent849Component', () => {
  let component: TestComponent849Component;
  let fixture: ComponentFixture<TestComponent849Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent849Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
