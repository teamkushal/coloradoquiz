import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent695Component } from './test-component695.component';

describe('TestComponent695Component', () => {
  let component: TestComponent695Component;
  let fixture: ComponentFixture<TestComponent695Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent695Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
