import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent821Component } from './test-component821.component';

describe('TestComponent821Component', () => {
  let component: TestComponent821Component;
  let fixture: ComponentFixture<TestComponent821Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent821Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
