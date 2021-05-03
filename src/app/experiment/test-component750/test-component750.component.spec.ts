import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent750Component } from './test-component750.component';

describe('TestComponent750Component', () => {
  let component: TestComponent750Component;
  let fixture: ComponentFixture<TestComponent750Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent750Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
