import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent305Component } from './test-component305.component';

describe('TestComponent305Component', () => {
  let component: TestComponent305Component;
  let fixture: ComponentFixture<TestComponent305Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent305Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
