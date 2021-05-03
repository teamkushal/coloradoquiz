import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent111Component } from './test-component111.component';

describe('TestComponent111Component', () => {
  let component: TestComponent111Component;
  let fixture: ComponentFixture<TestComponent111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
