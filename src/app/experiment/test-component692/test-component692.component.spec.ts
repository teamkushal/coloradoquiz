import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent692Component } from './test-component692.component';

describe('TestComponent692Component', () => {
  let component: TestComponent692Component;
  let fixture: ComponentFixture<TestComponent692Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent692Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
