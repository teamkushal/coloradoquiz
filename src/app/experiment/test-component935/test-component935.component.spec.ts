import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent935Component } from './test-component935.component';

describe('TestComponent935Component', () => {
  let component: TestComponent935Component;
  let fixture: ComponentFixture<TestComponent935Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent935Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
