import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent887Component } from './test-component887.component';

describe('TestComponent887Component', () => {
  let component: TestComponent887Component;
  let fixture: ComponentFixture<TestComponent887Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent887Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
