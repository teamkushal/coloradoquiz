import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2685Component } from './test-component2685.component';

describe('TestComponent2685Component', () => {
  let component: TestComponent2685Component;
  let fixture: ComponentFixture<TestComponent2685Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2685Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
