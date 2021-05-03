import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent165Component } from './test-component165.component';

describe('TestComponent165Component', () => {
  let component: TestComponent165Component;
  let fixture: ComponentFixture<TestComponent165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent165Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
