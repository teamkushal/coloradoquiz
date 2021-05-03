import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent19Component } from './test-component19.component';

describe('TestComponent19Component', () => {
  let component: TestComponent19Component;
  let fixture: ComponentFixture<TestComponent19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
