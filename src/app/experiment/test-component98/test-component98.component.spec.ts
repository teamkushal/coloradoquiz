import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent98Component } from './test-component98.component';

describe('TestComponent98Component', () => {
  let component: TestComponent98Component;
  let fixture: ComponentFixture<TestComponent98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent98Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
