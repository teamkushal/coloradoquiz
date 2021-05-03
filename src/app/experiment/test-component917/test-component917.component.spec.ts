import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent917Component } from './test-component917.component';

describe('TestComponent917Component', () => {
  let component: TestComponent917Component;
  let fixture: ComponentFixture<TestComponent917Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent917Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
