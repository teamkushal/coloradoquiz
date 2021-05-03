import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent471Component } from './test-component471.component';

describe('TestComponent471Component', () => {
  let component: TestComponent471Component;
  let fixture: ComponentFixture<TestComponent471Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent471Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
