import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent65Component } from './test-component65.component';

describe('TestComponent65Component', () => {
  let component: TestComponent65Component;
  let fixture: ComponentFixture<TestComponent65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
