import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent507Component } from './test-component507.component';

describe('TestComponent507Component', () => {
  let component: TestComponent507Component;
  let fixture: ComponentFixture<TestComponent507Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent507Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
