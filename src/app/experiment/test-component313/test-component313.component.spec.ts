import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent313Component } from './test-component313.component';

describe('TestComponent313Component', () => {
  let component: TestComponent313Component;
  let fixture: ComponentFixture<TestComponent313Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent313Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
