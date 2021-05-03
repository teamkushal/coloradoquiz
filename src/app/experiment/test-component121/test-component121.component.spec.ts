import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent121Component } from './test-component121.component';

describe('TestComponent121Component', () => {
  let component: TestComponent121Component;
  let fixture: ComponentFixture<TestComponent121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
