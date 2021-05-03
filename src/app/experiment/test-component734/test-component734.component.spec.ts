import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent734Component } from './test-component734.component';

describe('TestComponent734Component', () => {
  let component: TestComponent734Component;
  let fixture: ComponentFixture<TestComponent734Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent734Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
