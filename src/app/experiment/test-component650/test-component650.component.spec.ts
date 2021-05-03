import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent650Component } from './test-component650.component';

describe('TestComponent650Component', () => {
  let component: TestComponent650Component;
  let fixture: ComponentFixture<TestComponent650Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent650Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
