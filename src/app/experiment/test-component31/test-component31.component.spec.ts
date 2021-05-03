import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent31Component } from './test-component31.component';

describe('TestComponent31Component', () => {
  let component: TestComponent31Component;
  let fixture: ComponentFixture<TestComponent31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
