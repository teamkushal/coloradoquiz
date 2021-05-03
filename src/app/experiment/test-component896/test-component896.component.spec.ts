import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent896Component } from './test-component896.component';

describe('TestComponent896Component', () => {
  let component: TestComponent896Component;
  let fixture: ComponentFixture<TestComponent896Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent896Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
