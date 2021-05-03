import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent421Component } from './test-component421.component';

describe('TestComponent421Component', () => {
  let component: TestComponent421Component;
  let fixture: ComponentFixture<TestComponent421Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent421Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
