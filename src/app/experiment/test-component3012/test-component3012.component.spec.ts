import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3012Component } from './test-component3012.component';

describe('TestComponent3012Component', () => {
  let component: TestComponent3012Component;
  let fixture: ComponentFixture<TestComponent3012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3012Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
