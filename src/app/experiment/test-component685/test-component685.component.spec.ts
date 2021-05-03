import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent685Component } from './test-component685.component';

describe('TestComponent685Component', () => {
  let component: TestComponent685Component;
  let fixture: ComponentFixture<TestComponent685Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent685Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
