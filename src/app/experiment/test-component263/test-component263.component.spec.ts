import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent263Component } from './test-component263.component';

describe('TestComponent263Component', () => {
  let component: TestComponent263Component;
  let fixture: ComponentFixture<TestComponent263Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent263Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
